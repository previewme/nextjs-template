terraform {
  cloud {
    organization = "previewme"

    workspaces {
      name = "nextjs-template-ecr"
    }
  }
}
