function f1() {
  console.log('f1');
};

self.f2 = function() {
  console.log('f2');
};

self.f3 = () => {
  console.log('f3');
};

const f4 = function() {
  console.log('f4');
};

const f5 = () => {
  console.log('f5');
};

self.v1 = 'v1';

const v2 = 'v2';
