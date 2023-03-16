<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [On Matrix tombstones](#on-matrix-tombstones)
  - [PL50 tombstoning](#pl50-tombstoning)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# On Matrix tombstones

I am not putting the events here as I have [scripts for that separately](https://gitea.blesmrt.net/mikaela/scripts/src/branch/master/bash).

## PL50 tombstoning

Synapse versions before [1.11.0 (2020-02-21), technically 1.11.0rc1 (2020-02-19)](https://github.com/matrix-org/synapse/releases/tag/v1.11.0)
allowed power level 50 to set tombstones and thus hijack rooms. Thus this is
dependent on the Synapse version used at the time of room creation.

- [PR](https://github.com/matrix-org/synapse/pull/6834)
- [commit](https://github.com/matrix-org/synapse/commit/3404ad289b1d2e5bc5c7f277f519b9698dbdaa15)

In the same context invites were changed to require PL50 by default, and ACL
also got the requirement for PL100.
