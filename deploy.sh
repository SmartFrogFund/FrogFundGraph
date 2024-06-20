#!/bin/bash

# 检查并确保脚本在脚本所在目录运行
cd "$(dirname "$0")"

# 生成版本号，格式为 vYYYYMMDD.HHMMSS
generate_version() {
  now=$(date +"%Y%m%d.%H%M%S")
  version="v${now}"
  echo $version > version.txt
  echo "Generated version: $version"
}

# 安装项目依赖
install_dependencies() {
  echo "Installing dependencies..."
  pnpm install
}

# 生成代码并构建项目
codegen_and_build() {
  echo "Generating code and building project..."
  pnpm codegen
  pnpm build
}

# 创建子图
create_subgraph() {
  echo "Creating subgraph..."
  npx graph create --node http://42.192.203.239:8020/ frogfund
}

# 部署子图到本地
deploy_subgraph() {
  version=$(cat version.txt)
  echo "Deploying subgraph with version: $version"
  npx graph deploy --node http://42.192.203.239:8020/ --ipfs https://ipfs.network.thegraph.com/ frogfund --version-label "$version"
}

# 执行步骤
generate_version
install_dependencies
codegen_and_build
create_subgraph
deploy_subgraph
