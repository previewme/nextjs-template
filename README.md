[![Application Build](https://github.com/previewme/nextjs-template/actions/workflows/build.yml/badge.svg)](https://github.com/previewme/nextjs-template/actions/workflows/build.yml)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=previewme_nextjs-template&metric=coverage&token=1d3927c77fe4da7c44207ae14790ac2f34198d29)](https://sonarcloud.io/summary/new_code?id=previewme_nextjs-template)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=previewme_nextjs-template&metric=vulnerabilities&token=1d3927c77fe4da7c44207ae14790ac2f34198d29)](https://sonarcloud.io/summary/new_code?id=previewme_nextjs-template)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=previewme_nextjs-template&metric=alert_status&token=1d3927c77fe4da7c44207ae14790ac2f34198d29)](https://sonarcloud.io/summary/new_code?id=previewme_nextjs-template)

# nextjs-template
A template project to create NextJS skeleton with typescript

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Build & Test

```bash
npm run build
```

### Test
```bash
npm test
```

### Run development server
```bash
npm run dev
```

### Build and run docker container locally
The following commands build and run a production equivalent container

1. Build the project
```bash
npm ci
npm run build
```

2. Build the docker container
```bash
docker build . -t nextjs-template
```

3. Run the docker container
```bash
docker run -d -p 3000:3000 -t nextjs-template:latest
```

## Initial Project Setup

To set up the project by forking this project, then the following instructions need to be carried out. Please read these instructions carefully to ensure no steps are missed out.

### SonarCloud

For code quality checks we use SonarCloud and the project must be setup in SonarCloud.

1. Login to [SonarCloud](https://sonarcloud.io/organizations/previewme)
2. Click the + and then Analyze new project
3. Select the GitHub project you have created with this template
4. Click Setup
5. Disable Automatic Analysis
6. Update sonar-project.properties with the correct information for the project key and git repository

### README.md

1. Update the links to the badges
2. Update all references for nextjs-template
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

The GitHub workflow will use the repository name for the application name, it is essential to name the repository appropriately. E.g: foo-application.

#### Workspace names
* `deployment/ecr/backend.tf` replace the workspace name to match the project name E.g: foo-ecr

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

