#!/bin/sh
pm2 stop all && pm2 -f start /home/ubuntu/expresstest/index.js && pm2 save
