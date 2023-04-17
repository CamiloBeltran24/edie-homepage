(() => {
  'use strict';
  
  //Intersection Observer
  const isIntersecting = ( entry ) => {
    return entry.isIntersecting;  // return true or false
  }

  const animateTarget = ( entry ) => {
    console.log( entry );
    let target = entry.target;
    target.classList.add('active');

    observer.unobserve( target ) // Remove the observer from the element once the target has been on the screen
  }

  const observer = new IntersectionObserver( ( entries ) => {
    entries
      .filter( isIntersecting )
      .forEach( animateTarget )
  })


  const registerTarget = ( target ) => {
    observer.observe( target );
  }

  let elementsToObserve = document.querySelectorAll('.animate');
  elementsToObserve = [ ...elementsToObserve ];

  elementsToObserve.forEach( ( element ) => {
    registerTarget( element );
  })

})();