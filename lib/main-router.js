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
exports.handlerPost = async function(ctx, next) {
    let data = ''
    ctx.on('data', (chunk) => {
        data += chunk
    }).on('end', () => {
        console.log('data', data)
        data = JSON.parse(data)
        ctx.body = data
    })

    // get repo
    // cd repo dir
    // git pull && gitbook build
}