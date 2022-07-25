{ pkgs }: {
  deps = [
    pkgs.yarn test
pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}