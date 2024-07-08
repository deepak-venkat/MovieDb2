#!/bin/bash

# Array of dependencies to update
dependencies=(
  "@testing-library/jest-dom"
  "@testing-library/react"
  "@testing-library/user-event"
  "react"
  "react-dom"
  "react-router-dom"
  "react-scripts"
  "web-vitals"
)

# Update each dependency to the latest version
for package in "${dependencies[@]}"; do
  latest_version=$(npm show "$package" version)
  echo "Updating $package to version $latest_version"
  npm install "$package@$latest_version" --save
done

# Install all updated packages
npm install
