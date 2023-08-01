

const myPromise = new Promise((resolveOuter) => {

  resolveOuter(new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    })
  );
});

const targetPromise = (myVal) => {

    return new Promise ((resolve, reject) => {
        resolve(myVal);
    }) 
}
console.log("This is my promise", targetPromise(5));
