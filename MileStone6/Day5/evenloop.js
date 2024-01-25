function a() {
    console.log('a')
    b()
    console.log('bbb')
    
}

function b() {
    console.log('b')
    c()
    console.log('bbb')
    
    
}
function c() {
    console.log('c')
   
    console.log('ccccc')
    
    
}

function x() {
    console.log('x')
    y()
    console.log('xxx')
    
    
}

function y() {
    console.log('y')
    z()
    console.log('yyy')
    
    
}
function z() {
    console.log('z')
    console.log('zzzzz')
    
    
}
a()
x()