/**
 * Created by xiaobxia on 2017/9/6.
 */
import Store from '../../src/store';

describe('cookieStore', function () {
  let cookieStore = new Store('cookie');
  //it声明测试实例
  it('setItem', function () {
    cookieStore.setItem('packageName', 'store');
    expect(cookieStore.getItem('packageName')).to.be.equal('store');
  });
  it('getItem', function () {
    cookieStore.setItem('packageName', 'store');
    expect(cookieStore.getItem('packageName')).to.be.equal('store');
  });
  it('removeItem', function () {
    cookieStore.setItem('packageName', 'store');
    cookieStore.removeItem('packageName');
    expect(cookieStore.getItem('packageName')).to.be.equal('');
  });
  it('clearAll', function () {
    cookieStore.setItem('packageName', 'store');
    cookieStore.setItem('author', 'xiaobxia');
    cookieStore.clearAll();
    expect(cookieStore.getAllItem().length).to.be.equal(0);
  });
  it('getAllItem', function () {
    cookieStore.clearAll();
    cookieStore.setItem('packageName', 'store');
    cookieStore.setItem('author', 'xiaobxia');
    expect(cookieStore.getAllItem().length).to.be.equal(2);
    expect(cookieStore.getItem('packageName')).to.be.equal('store');
    expect(cookieStore.getItem('author')).to.be.equal('xiaobxia');
  });
  it('getData', function () {
    cookieStore.clearAll();
    cookieStore.setItem('packageName', 'store');
    cookieStore.setItem('author', 'xiaobxia');
    expect(cookieStore.getData(['packageName']).length).to.be.equal(1);
    expect(cookieStore.getData(['packageName', 'author']).length).to.be.equal(2);
    expect(cookieStore.getData(['packageName', 'author'])[0]).to.be.equal('store');
    expect(cookieStore.getData(['packageName', 'author'])[1]).to.be.equal('xiaobxia');
  });
  it('setData', function () {
    cookieStore.clearAll();
    cookieStore.setData({
      packageName: 'store',
      author: 'xiaobxia'
    });
    expect(cookieStore.getData(['packageName']).length).to.be.equal(1);
    expect(cookieStore.getData(['packageName', 'author']).length).to.be.equal(2);
    expect(cookieStore.getData(['packageName', 'author'])[0]).to.be.equal('store');
    expect(cookieStore.getData(['packageName', 'author'])[1]).to.be.equal('xiaobxia');
  });
});

describe('localStore', function () {
  let localStore = new Store('local');
  //it声明测试实例
  it('setItem', function () {
    localStore.setItem('packageName', 'store');
    expect(localStore.getItem('packageName')).to.be.equal('store');
  });
  it('getItem', function () {
    localStore.setItem('packageName', 'store');
    expect(localStore.getItem('packageName')).to.be.equal('store');
  });
  it('removeItem', function () {
    localStore.setItem('packageName', 'store');
    localStore.removeItem('packageName');
    expect(localStore.getItem('packageName')).to.be.equal('');
  });
  it('clearAll', function () {
    localStore.setItem('packageName', 'store');
    localStore.setItem('author', 'xiaobxia');
    localStore.clearAll();
    expect(localStore.getAllItem().length).to.be.equal(0);
  });
  it('getAllItem', function () {
    localStore.clearAll();
    localStore.setItem('packageName', 'store');
    localStore.setItem('author', 'xiaobxia');
    expect(localStore.getAllItem().length).to.be.equal(2);
    expect(localStore.getItem('packageName')).to.be.equal('store');
    expect(localStore.getItem('author')).to.be.equal('xiaobxia');
  });
  it('getData', function () {
    localStore.clearAll();
    localStore.setItem('packageName', 'store');
    localStore.setItem('author', 'xiaobxia');
    expect(localStore.getData(['packageName']).length).to.be.equal(1);
    expect(localStore.getData(['packageName', 'author']).length).to.be.equal(2);
    expect(localStore.getData(['packageName', 'author'])[0]).to.be.equal('store');
    expect(localStore.getData(['packageName', 'author'])[1]).to.be.equal('xiaobxia');
  });
  it('setData', function () {
    localStore.clearAll();
    localStore.setData({
      packageName: 'store',
      author: 'xiaobxia'
    });
    expect(localStore.getData(['packageName']).length).to.be.equal(1);
    expect(localStore.getData(['packageName', 'author']).length).to.be.equal(2);
    expect(localStore.getData(['packageName', 'author'])[0]).to.be.equal('store');
    expect(localStore.getData(['packageName', 'author'])[1]).to.be.equal('xiaobxia');
  });
});

describe('sessionStore', function () {
  let sessionStore = new Store('session');
  //it声明测试实例
  it('setItem', function () {
    sessionStore.setItem('packageName', 'store');
    expect(sessionStore.getItem('packageName')).to.be.equal('store');
  });
  it('getItem', function () {
    sessionStore.setItem('packageName', 'store');
    expect(sessionStore.getItem('packageName')).to.be.equal('store');
  });
  it('removeItem', function () {
    sessionStore.setItem('packageName', 'store');
    sessionStore.removeItem('packageName');
    expect(sessionStore.getItem('packageName')).to.be.equal('');
  });
  it('clearAll', function () {
    sessionStore.setItem('packageName', 'store');
    sessionStore.setItem('author', 'xiaobxia');
    sessionStore.clearAll();
    expect(sessionStore.getAllItem().length).to.be.equal(0);
  });
  it('getAllItem', function () {
    sessionStore.clearAll();
    sessionStore.setItem('packageName', 'store');
    sessionStore.setItem('author', 'xiaobxia');
    expect(sessionStore.getAllItem().length).to.be.equal(2);
    expect(sessionStore.getItem('packageName')).to.be.equal('store');
    expect(sessionStore.getItem('author')).to.be.equal('xiaobxia');
  });
  it('getData', function () {
    sessionStore.clearAll();
    sessionStore.setItem('packageName', 'store');
    sessionStore.setItem('author', 'xiaobxia');
    expect(sessionStore.getData(['packageName']).length).to.be.equal(1);
    expect(sessionStore.getData(['packageName', 'author']).length).to.be.equal(2);
    expect(sessionStore.getData(['packageName', 'author'])[0]).to.be.equal('store');
    expect(sessionStore.getData(['packageName', 'author'])[1]).to.be.equal('xiaobxia');
  });
  it('setData', function () {
    sessionStore.clearAll();
    sessionStore.setData({
      packageName: 'store',
      author: 'xiaobxia'
    });
    expect(sessionStore.getData(['packageName']).length).to.be.equal(1);
    expect(sessionStore.getData(['packageName', 'author']).length).to.be.equal(2);
    expect(sessionStore.getData(['packageName', 'author'])[0]).to.be.equal('store');
    expect(sessionStore.getData(['packageName', 'author'])[1]).to.be.equal('xiaobxia');
  });
});
