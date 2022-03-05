---
title: Continuous deployment.
author: Giovani Fouz Jiménez
description: Continuous deployment and...
img: deploy.jpg
date: febraury 5, 2022
---

Continuous integration (CI) and continuous delivery (CD) are two
approaches to software development that are designed to improve code
quality and enable rapid delivery and deployment of code. They are
usually deployed together (CI/CD) to ensure rapid overall delivery of
new software features and fixes.

## Continuous integration vs. continuous delivery

The develop and test phase of software development is the
focus of continuous integration. As developers change software code,
those changes are immediately checked into a central source code
control system. When code is checked in, automated build processes and
tests are triggered to make sure that the changes did not break the
larger software system being worked on. When shorter and more frequent
develop-build-test cycles are used, coding errors are caught more
quickly, and the risk associated with large-scale code changes is
mitigated.

Continuous delivery means that as new software features and
fixes pass through the develop-build-test cycle, they become available
as rapidly as possible. When smaller changes are delivered more
frequently into production, the risk of large-scale changes breaking
the system goes down, and the delay in releasing them to customers is
minimized.

## What is continuous deployment?
Continuous deployment extends CI/CD so that all changes that pass the
CI/CD phase are immediately exposed to customers. With continuous
deployment, customers get faster access to new features and bug fixes,
and developers get more immediate feedback about the changes they’ve
made. 

Top CI/CD tools Some common CI/CD tools are: CloudBees