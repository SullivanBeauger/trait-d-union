#!/usr/bin/env bash

set -e
set -o pipefail
source $(dirname $0)/common.sh

NEW_VERSION_TYPE=$1
OLD_PACKAGE_VERSION=$(get_package_version)

function ensure_no_uncommited_changes_are_present {
    if [ -n "$(git status --porcelain)" ];
    then
        echo -e "${RED}You have uncommitted changes!${RESET_COLOR} Please commit or stash your changes first.\n"
        git status
        exit 1
    fi
}

function ensure_new_version_is_either_minor_or_patch_or_major {
    if [ "$NEW_VERSION_TYPE" != "patch" -a "$NEW_VERSION_TYPE" != "minor" -a "$NEW_VERSION_TYPE" != "major" ];
    then
      echo -e "${RED}Wrong argument!${RESET_COLOR} Only ${GREEN}patch${RESET_COLOR}, ${GREEN}minor${RESET_COLOR} or ${GREEN}major${RESET_COLOR} is allowed.\n"
      exit 1
    fi
}

function update_version {
    (cd api/ && npm version $NEW_VERSION_TYPE --git-tag-version=false >> /dev/null)
    (cd front/ && npm version $NEW_VERSION_TYPE --git-tag-version=false >> /dev/null)
    npm version $NEW_VERSION_TYPE --git-tag-version=false >> /dev/null
    NEW_PACKAGE_VERSION=$(get_package_version)
}

# Update when adding a new app
function create_a_release_commit {
    git add package*.json api/package*json front/package*.json --update
    git commit --message "[RELEASE] A ${NEW_VERSION_TYPE} is being released from ${OLD_PACKAGE_VERSION} to ${NEW_PACKAGE_VERSION}."
}

echo -e "Preparing a new release for ${RED}production${RESET_COLOR}.\n"

ensure_no_uncommited_changes_are_present
ensure_new_version_is_either_minor_or_patch_or_major
update_version
create_a_release_commit

echo -e "From now execute ${CYAN}npm run release:publish${RESET_COLOR}.\n"
echo -e "Release preparation ${GREEN}succeeded${RESET_COLOR}."
