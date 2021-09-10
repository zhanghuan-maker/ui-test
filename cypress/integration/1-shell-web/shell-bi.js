/// <reference types="cypress" />

// shell_web login


describe('shell-web', function() {
  it('login', function() {
    cy.visit('https://b2b.digitalshell.com.cn/shell/bi/#/')
      .get('#kc-page-logo').should('be.visible')
      .get('#username').clear().type('xcli@thoughtworks.com')
      .get('#password').clear().type('Xcli@thoughtworks.com1')
      .get('#kc-login').click()
      .get('.logo').should('be.visible')//shell logo
      .get('#page > div.sh-side-bar.side-bar > div.title-bar > ul > li.active').should('contain','设备概览')//高亮第一个
  })
  it('equipment', function() {
    cy.get('.el-input__inner')
      .wait(3000)
      .click()
      .type('鑫海').should('have.value','鑫海')//输入框
      .get('.btn_light').should('be.visible')//地图概览的按钮
      .get('.search-count').should('be.visible')//设备概览的统计
  })
  it('map', function() {
     cy.get('.btn_light').click()
       .wait(2000)
       .get('.map-content').should('be.visible')//地图
     cy.contains('返回首页').click()
       .wait(2000)
  })
  it('monitor',function () {
    cy.contains('实时监测').click()
        .wait(2000)
        .get('.logo').should('be.visible')
        .get('.btn_light').click()
        .wait(2000)
        .get('.logo-container').should('be.visible')
   cy.contains('返回首页').click()
      .get('.logo').should('be.visible')//返回首页shell logo
  })
  it('dataReport',function (){
    cy.contains('数据报表').click()
      .get('#page > div.sh-side-bar.side-bar > div.title-bar > ul > li.active').should('contain','数据报表')//高亮实时监测
  })
  it('heathReport',function (){
    cy.contains('健康报告').click()
      .get('#page > div.sh-side-bar.side-bar > div.title-bar > ul > li.active').should('contain','健康报告')//高亮健康报告
        .wait(2000)
  })
  it('operationPlatform',function (){
    cy.contains('运维平台').click()
        .wait(2000)
    cy.get('body > div.main > div > div > div.main-content-menu > div.menu-content > ul > li.el-menu-item.is-active').should('contain','数采设备')//高亮数彩设备// .
        .wait(2000)
    cy.contains('首页').click()
  })

})
