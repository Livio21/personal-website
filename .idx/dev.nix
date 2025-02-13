{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.vite
  ];
  idx.extensions = [
    "svelte.svelte-vscode"
    "vue.volar"    
    "bradlc.vscode-tailwindcss"
    "dsznajder.es7-react-js-snippets"
    "ecmel.vscode-html-css"
    "esbenp.prettier-vscode"
    "mgmcdermott.vscode-language-babel"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"          
          "dev"
          "preview"
        ];
        env = {
          PORT = "$PORT";
        };
        manager = "web";
      };
    };
  };
}