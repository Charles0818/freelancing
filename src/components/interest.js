const data = [
    {
      principal: 2500,
      time: 1.8
    },
    {
      principal: 1000,
      time: 5,
    },
    {
      principal: 3000,
      time: 1
    },
    {
      principal: 2000,
      time: 3
    }
  ];
  
  const interestCalculator = (array) => {
    const calculatePrincipal = (principal, rate, time) => {
      const interest = (principal * rate * time ) / 100;
      return { principal, rate, time, interest }
    }
    const interestData = array.map(el => {
      const { principal, time } = el;
      switch(principal, time){
        case principal >= 2500 && (time > 1 && time < 3): {
          const rate = 3;
          return calculatePrincipal(principal, rate, time );
        }
        case principal >=  2500 && time >= 3 : {
          const rate = 4;
          return calculatePrincipal(principal, rate, time );
        }
        case principal < 2500 || time <= 1 : {
          const rate = 2;
          return calculatePrincipal(principal, rate, time );
        }
        default: {
          const rate = 1;
          return calculatePrincipal(principal, rate, time );
        }
      }
    });
    console.log(interestData);
  }
  
  interestCalculator(data);
  