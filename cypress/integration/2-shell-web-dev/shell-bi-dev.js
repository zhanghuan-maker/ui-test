/// <reference types="cypress" />

// shell_web login


describe('shell-web', function () {
    it('login', function () {
        cy.visit('https://b2b-dev.digitalshell.com.cn/shell/bi/#/')
            .get('#kc-page-logo').should('be.visible')
            .get('#username').clear().type('huan.zhang@thoughtworks.com')
            .get('#password').clear().type('12345678')
            .get('#kc-login').click()
            .get('.logo').should('be.visible')//shell logo
            .get('#page > div.sh-side-bar.side-bar > div.title-bar > ul > li.active').should('contain', '首页')//高亮第一个
            .get('.icon-chevrons-right.rotate').should('be.visible')
        cy.get('.icon-chevrons-right.rotate').click()//箭头
            .get('.icon-chevrons-right').should('be.visible')
        cy.get('.icon-chevrons-right').click()
    })
    it('equipment', function () {
        cy.contains('设备概览').click()
            .wait(3000)
            .get('.el-input__inner')
            .wait(3000)
            .click()
            .type('鑫海').should('have.value', '鑫海')//输入框
            .get('.btn_light').should('be.visible')//地图概览的按钮
            .get('.search-count').should('be.visible')//设备概览的统计
            .get('.icon-filter').should('be.visible')//筛选按钮
    })
    it('map', function () {
        cy.get('.btn_light.overview-btn').click()
            .get('.map-content').should('be.visible')//地图
        cy.contains('返回首页').click()
            .wait(2000)
    })
    it('monitor', function () {
        cy.contains('实时监测').click()
            .wait(2000)
            .get('.statistics-overview-title').should('be.visible')//数据统计title
            .get('.title').should('be.visible')//监测点title
        cy.contains('返回首页').click()
            .get('.logo').should('be.visible')//返回首页shell logo
    })
    it('dataReport', function () {
        cy.contains('数据报表').click()
            .get('#page > div.sh-side-bar.side-bar > div.title-bar > ul > li.active').should('contain', '数据报表')//高亮实时监测
            .get('.btn.btn--active').children().should('contain', '设备信息')//高亮设备信息
        cy.contains('服务工单').click()
            .wait(5000)
            .get('.btn.btn--active').children().should('contain', '服务工单')//高亮服务工单
        cy.contains('维保记录').click()
            .wait(5000)
            .get('.btn.btn--active').children().should('contain', '维保记录')//高亮维保记录
        cy.contains('自定义维保记录').click()
            .wait(5000)
            .get('.btn.btn--active').children().should('contain', '自定义维保记录')//高亮自定义维保记录
    })
    it('heathReport', function () {
        cy.contains('健康报告').click()
            .get('#page > div.sh-side-bar.side-bar > div.title-bar > ul > li.active').should('contain', '健康报告')//高亮健康报告
            .wait(2000)
        cy.get('.add-btn').should('be.visible')//创建报告的按钮
    })
    it('manageIBC', function () {
        cy.contains('管理IBC').click()
            .get('#page > div.sh-side-bar.side-bar > div.title-bar > ul > li.active').should('contain', '管理IBC')//高亮管理IBC
    })
    it('suite', function () {
        cy.contains('油检套餐管理').click()
            .get('#page > div.content > div > div > div > div > div:nth-child(1) > div.sh-table-header_left > div > div > button.btn.btn--active > span').should('contain', '油检套餐')
    })
    it('operationPlatform', function () {
        cy.contains('运维平台').click()
            .wait(2000)
        cy.get('.el-menu-item.is-active').should('contain', '数采设备')//高亮数彩设备// .
            .wait(2000)
        cy.contains('网关烧录').click()
            .wait(2000)
            .get('.el-menu-item.is-active').should('contain', '网关烧录')//高亮网关烧录//
        cy.contains('监测点管理').click()
            .wait(2000)
            .get('.el-menu-item.is-active').should('contain', '监测点管理')//高亮监测点管理//
        cy.contains('告警列表').click()
            .wait(2000)
            .get('.el-menu-item.is-active').should('contain', '告警列表')//高亮告警列表//
        cy.contains('返回首页').click()
    })
})
