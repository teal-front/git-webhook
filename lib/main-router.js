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
    //let body = ctx.request.body
    //let repo = body.repository.name
    
    let {repo} = ctx.query

    const gitDir = `/data/${repo}`
    childProcess.exec(`cd "${gitDir}" && git pull && gitbook build`, (err, stdout, stderr) => {
        if (err) {
            ctx.body = 'fail'
            return
        }
        ctx.body= 'ok'
    })
}


exports.handlerUAT = async ctx => {
    let body = ctx.request.body
    let ref = body.ref
    if (ref !== 'refs/headers/uat') {
        ctx.body = 'not uat'
        return
    }
    let repo = ''
    childProcess.execFile('../bin/sendmail.sh', [repo])
}
