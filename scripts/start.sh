#!/bin/sh
pm2 -f start /home/ubuntu/expresstest/index.js && pm2 save
