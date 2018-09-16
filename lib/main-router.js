'use strict';

/**
 * controller - main.js
 */

const path = require('path');
const fs = require('fs')
const childProcess = require('child_process');

/**
 * git webhook
 */
exports.handlerPost = async ctx => {
    ctx.body = ctx.request.body
    let {repo} = ctx.query
    if (!repo) {
        ctx.status = 404
        return
    }

    const gitDir = '/data/${repo}'
    childProcess.exec(`cd "${gitDir}" && git pull && gitbook build`, (err, stdout, stderr) => {
        if (err) {
            ctx.body = 'fail'
            return
        }
        ctx.body= 'ok'
    })

    // get repo
    // cd repo dir
    // git pull && gitbook build
}