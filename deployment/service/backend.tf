terraform {
  cloud {
    organization = "previewme"

    workspaces {
      tags = ["nextjs-template"]
    }
  }
}
