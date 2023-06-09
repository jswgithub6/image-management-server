const express = require('express')
const router = express.Router()

const fileController = require('../controller/file')
const fileValidate = require('../validator/file')

const upload = require('../middleware/upload')

// 文件上传
router.post('/upload', upload('files').single('file'), fileController.uploadFile)

// 获取所有文件信息
router.get('/', fileValidate.get, fileController.fetchFileList)

// 获取所有审核通过的图片信息
router.get('/reviewStatus/pass', fileValidate.get, fileController.fetchAllPassFileList)

// 更新图片的状态
router.patch('/:id/reviewStatus/:status', fileValidate.updateStatus, fileController.updateStatus)

// 置顶图片
router.patch('/:id/setTop', fileValidate.updateTopStatus, fileController.setTop)

// 取消置顶
router.patch('/:id/cancelTop', fileValidate.updateTopStatus, fileController.cancelTop)

// 删除文件
router.delete('/:id', fileValidate.delete, fileController.deleteFile)

// 排序
router.post('/sort', fileController.sortFile)

module.exports = router