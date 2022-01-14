# nextjs-template
A template project to create NextJS skeleton with typescript

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Initial Project Setup

To set up the project by forking this project, then the following instructions need to be carried out. Please read these instructions carefully to ensure no steps are missed out.

## SonarCloud

For code quality checks we use SonarCloud and the project must be setup in SonarCloud.

1. Login to [SonarCloud](https://sonarcloud.io/organizations/previewme)
2. Click the + and then Analyze new project
3. Select the GitHub project you have created with this template
4. Click Setup

## Project Setup

1. The following files need to be modified to suit your project.

### README.md

1. Update the links to the badges
2. Update all references for spring-boot-service
After cloning this template please do the following to ensure your project builds and deploys correctly

### package.json

* name
* version
* repository
* description
* license

## Versions

We follow semantic versioning where possible. Generally we do not update versions unless there has been a breaking change in our service contracts.

The versions can be increased in the GitHub Action file when required.

## Deployment

This project uses Terraform to deploy the service to the PreviewMe ECS cluster.

### AWS Credentials
The ECR and Service deployment require AWS Credentials to be setup in Terraform Cloud. This can be done by running the [terraform-cloud-boostrap](https://github.com/previewme/terraform-cloud-bootstrap) action.

### ECR repository Deployment
The following changes need to be made in the Terraform configuration.

The GitHub workflow will use the repository name for the application name, it is essential to name the repository appropriately. E.g: foo-service.

#### Workspace names
* `deployment/ecr/backend.tf` replace the workspace tags to match the project name E.g: foo-ecr

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

