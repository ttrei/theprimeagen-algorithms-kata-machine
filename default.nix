with import <nixpkgs> {};
mkShell {
  nativeBuildInputs = [
    bashInteractive

    nodejs
    yarn
  ];
}
