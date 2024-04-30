const soma=(...valores) => {      
    const somar=(val)=>{
        let res =0;
        for (const v of val) {
            res += v
        }
        return res;
    }
    return somar(valores);
  };

  console.log(soma(4,8,7,4,2,8,11,12,34))