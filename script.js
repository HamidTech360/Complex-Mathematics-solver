let trigtab = '<div class="modal-header mx-auto d-block text-center"><h3>Trigonometry</h3></div><div class="modal-body mx-auto d-block text-center"><select name="" id="selectTrig"><option value="sin">sine</option><option value="cos">cosine</option><option value="tan">tan</option><option value="asin">arcsine</option><option value="acos">arccos</option><option value="atan">arctan</option><option value="cosh">cosh</option><option value="tanh">tanh</option><option value="sinh">sinh</option></select><input type="text" class="inp" id="trig-val" style="margin-right:0px;"><span class="deg" style="color: lightgreen; font-size: 25px;">degree</span></div><div class="modal-footer mx-auto d-block text-center"> <div class="trig-answer"></div><button type="button" class="btn btn-danger" id="trig-btn">Calculate</button></div> '
let factorialtab = '<div class="modal-header mx-auto d-block text-center"> <h4>Get factorial</h4></div><div class="modal-body mx-auto d-block text-center"><input type="number" id="factorial"></div><div class="modal-footer mx-auto d-block text-center"><div class="answer"></div> <button type="button" class="btn btn-danger" id="facto-btn">Get factorial</button></div>'
let permutationtab='  <div class="modal-header mx-auto d-block text-center"> <h4>Get Permutation</h4></div><div class="modal-body mx-auto d-block text-center"><input type="number" id="enn" style="width: 70px;" placeholder="n"><span class="perm" style="font-size: 32px; color: lightgreen;">p</span><input type="number" id="pee" style="width: 70px;" placeholder="r" style="padding-left:18px;"></div><div class="modal-footer mx-auto d-block text-center"><div class="perm-answer"></div> <button type="button" class="btn btn-danger" id="perm-btn" >Get Permutation</button></div>'
let combotab =  '     <div class="modal-header mx-auto d-block text-center"> <h4>Get combination</h4></div><div class="modal-body mx-auto d-block text-center"><input type="number" id="ennn" style="width: 70px;" placeholder="n"><span class="comb" style="font-size: 32px; color: lightgreen;">C</span><input type="number" id="peee" style="width: 70px;" placeholder="r"></div><div class="modal-footer mx-auto d-block text-center"><div class="comb-answer"></div> <button type="button" class="btn btn-danger" id="combo-btn">Calculate combination</button></div>' 
let matrixtab = '<div class="inputs"><div class="modal-header mx-auto d-block text-center"> <h4>Get Determinant</h4></div><div class="line-1 mx-auto d-block text-center"><input type="text" class="inp" id="a11"><input type="text" id="a12" class="inp"></div><div class="line-2 mx-auto d-block text-center"><input type="text" id="a21" class="inp"><input type="text" id="a22" class="inp"></div></div><div class="modal-footer mx-auto d-block text-center"><div class="matrix-answer"></div> <button type="button" class="btn btn-danger" id="matrix-btn">Calculate Determinant</button></div>'
let matrix3tab = '<div class="inputs"><div class="modal-header mx-auto d-block text-center"> <h4>Get Determinant</h4><h4>Three By Three Matrix</h4></div><div class="line-1 mx-auto d-block text-center"><input type="text" class="inp" id="b11"><input type="text" class="inp" id="b12"><input type="text" class="inp" id="b13"></div><div class="line-2 mx-auto d-block text-center"><input type="text" class="inp" id="b21"><input type="text" class="inp" id="b22"><input type="text" class="inp" id="b23"></div><div class="line-2 mx-auto d-block text-center"><input type="text" class="inp" id="b31"><input type="text" class="inp" id="b32"><input type="text" class="inp" id="b33"></div></div><div class="modal-footer mx-auto d-block text-center"><div class="matric-answer"></div> <button type="button" class="btn btn-danger" id="matric-btn">Calculate Determinant</button></div>'
let quadratictab = '<div class="inputs"><div class="modal-header mx-auto d-block text-center"><h4>Quadratic Equation</h4></div><div class="mx-auto d-block text-center"><input type="text" class="inpt" id="a" style="width: 30px; "> <span class="spn" style="font-size: 28px; color: lightgreen;">x<sup>2</sup><span style="font-size: 20px; color: red; margin-left:18px;">+</span></span> <input type="text" class="inpt" id="b" style="width: 30px;"> <span class="spn" style="font-size: 28px; color: lightgreen;">x<span style="font-size: 20px; color: red; margin-left:18px;">+</span></span><input type="text" class="inpt" id="c" style="width: 30px;"> </div><div class="modal-footer mx-auto d-block text-center"><div class="quad-answer"></div><button type="button" class="btn btn-danger" id="quad-btn">Calculate</button></div> '
let simultab = '<div class="inputs"><div class="modal-header mx-auto d-block text-center"> <h4>Simultaneous equation</h4></div><div class="mx-auto d-block text-center" id="eqn-1"><input type="text" class="inpt" id="x1" style="width: 30px; "> <span class="spn" style="font-size: 20px; color: lightgreen;">X<span style="font-size: 20px; color: red; margin-left:18px;">+</span></span><input type="text" class="inpt" id="y1" style="width: 30px;"> <span class="spn" style="font-size: 20px; color: lightgreen;">y</span><span class="spn" style="font-size: 28px; color: lightgreen;">=</span><input type="text" class="inpt" id="c1" style="width: 30px;"></div><div class="mx-auto d-block text-center" id="eqn-2" style="margin-top:10px;"><input type="text" class="inpt" id="x2" style="width: 30px; "> <span class="spn" style="font-size: 20px; color: lightgreen;">X <span style="font-size: 24px; color: red; margin-left:18px;">+</span></span><input type="text" class="inpt" id="y2" style="width: 30px;"> <span class="spn" style="font-size: 20px; color: lightgreen;">y</span><span class="spn" style="font-size: 28px; color: lightgreen;">=</span><input type="text" class="inpt" id="c2" style="width: 30px;"></div><div class="modal-footer mx-auto d-block text-center"><div class="simul-answer" style="color: lightgreen;"></div> <button type="button" class="btn btn-danger" id="simul-btn">Calculate</button></div>  '
let latitudetab = '<div class="modal-header mx-auto d-block text-center"><h3>Latitude and Longtitude</h3></div><div class="modal-body"><input type="text" class="lat" id="la1" style="margin-right:0px; text-align: end; font-size: 20px;"><sup style="font-size: 10px;">0</sup><select name="" class="selectTrig" id="la1c"><option value="n">N</option><option value="s">S</option></select><span class="comma" style="font-size: 50px; color: red;">,</span> <input type="text" class="lat" id="lo1" style="margin-right:0px; text-align: end; font-size: 20px;"><sup style="font-size: 10px;">0</sup><select name="" class="selectTrig" id="lo1c"><option value="e">E</option> <option value="w">W</option> </select><br><input type="text" class="lat" id="la2" style="margin-right:0px; text-align: end; font-size: 20px;"><sup style="font-size: 10px;">0</sup><select name="" class="selectTrig" id="la2c"><option value="n">N</option><option value="s">S</option></select><span class="comma" style="font-size: 50px; color: red;">,</span><input type="text" class="lat" id="lo2" style="margin-right:0px; text-align: end; font-size: 20px;"><sup style="font-size: 10px;">0</sup><select name="" class="selectTrig" id="lo2c"><option value="e">E</option><option value="w">W</option></select></div><div class="modal-footer mx-auto d-block text-center"> <div class="lat-answer"></div><button type="button" class="btn btn-danger" id="lat-btn">Calculate</button></div> '
let closes = '<span class="closemodal">&times;</span>'
let logtab = '<div class="modal-header mx-auto d-block text-center"><h3>Logarithm</h3></div><div class="modal-body mx-auto d-block text-center"><span class="log" style="font-size: 23px; counter-reset: lightgreen;">log</span><input type="number" class="inp" id="log"></div><div class="modal-footer mx-auto d-block text-center"> <div class="log-answer"></div><button type="button" class="btn btn-danger" id="log-btn">Calculate</button></div>  '
let Nlogtab = '<div class="modal-header mx-auto d-block text-center"><h3>Natural Logarithm</h3></div><div class="modal-body mx-auto d-block text-center"><span class="Nlog" style="font-size: 23px; color: lightgreen;">lN</span><input type="number" class="inp" id="Nlog"></div><div class="modal-footer mx-auto d-block text-center"> <div class="Nlog-answer"></div><button type="button" class="btn btn-danger" id="Nlog-btn">Calculate</button></div>  '
let apTab = '<div class="modal-header mx-auto d-block text-center"><h3>Arithmetic Progression</h3></div><div class="modal-body mx-auto d-block text-center" style="display: inline;"><span class="" style="font-size: 16px; color: red;"><input type="number" class="inp" id="ft" placeholder="1stTerm"></span><span class="" style="font-size: 16px; color: red; margin-left: 10px;" > <input type="number" class="inp" id="cd" placeholder="common diff"></span><span class="" style="font-size: 16px; color: red; margin-left: 10px;" ><input type="number" class="inp" id="nth-term" placeholder="nthTerm"></span> <br><span class="" style="font-size: 16px; color: red;">1stTerm </span><span class="" style="font-size: 11px; color: red; margin-left: 8px;">  diff </span><span class="" style="font-size: 16px; color: red; margin-left: 8px;">  nthTerm </span>  </div><div class="modal-footer mx-auto d-block text-center"> <div class="ap-answer"></div><div><select class="selectTrig" id="apselect"><option value="nthofap">calc the nth term of sequence</option><option  value="sumofap">calc Sum of nth-term arithmetic Progression</option></select></div><button type="button" class="btn btn-danger" id="ap-btn">Calculate</button></div> '
let gptab='<div class="modal-header mx-auto d-block text-center"><h3>Geometric Progression</h3></div><div class="modal-body mx-auto d-block text-center" style="display: inline;"><span class="" style="font-size: 16px; color: red;"><input type="number" class="inp" id="ftm" placeholder="1stTerm"></span><span class="" style="font-size: 16px; color: red; margin-left: 10px;" > <input type="number" class="inp" id="cr" placeholder="common diff"></span><span class="" style="font-size: 16px; color: red; margin-left: 10px;" ><input type="number" class="inp" id="nth-term-g" placeholder="nthTerm"></span> <br><span class="" style="font-size: 16px; color: red;">1stTerm </span><span class="" style="font-size: 11px; color: red; margin-left: 8px;">  cmnRatio </span><span class="" style="font-size: 16px; color: red; margin-left: 8px;">  nthTerm </span>  </div><div class="modal-footer mx-auto d-block text-center"> <div class="gp-answer"></div><div><select class="selectTrig" id="gpselection"><option value="nthofgp">Calc nth-term of sequence</option><option value="sumofgp">Calc sum of sequence</option><option value="sumtoinf">Calc sum to infinity of sequence</option></select></div><button type="button" class="btn btn-danger" id="gp-btn">Calculate</button></div> '
let geomtab = '<div class="modal-header mx-auto d-block text-center"><h3>Cordinate Geometry</h3></div><div class="modal-body mx-auto d-block text-center"><input type="text" class="lat" placeholder="x1" id="x1" style="margin-right:0px; text-align: end; font-size: 20px;"><span class="comma" style="font-size: 50px; color: red;">,</span> <input type="text" class="lat" placeholder="y1" id="y1" style="margin-right:0px; text-align: end; font-size: 20px;"><br><input type="text" class="lat" id="x2" placeholder="x2" style="margin-right:0px; text-align: end; font-size: 20px;"><span class="comma" style="font-size: 50px; color: red;">,</span><input type="text" class="lat" id="y2" placeholder="y2" style="margin-right:0px; text-align: end; font-size: 20px;"></div><div class="modal-footer mx-auto d-block text-center"> <div class="geom-answer"></div><div><select class="selectTrig" id="geom"><option value="slope">gCalc gradient/slope of the curve</option value="distance"><option>dCalc distance Between two points</option></select></div><button type="button" class="btn btn-danger" id="geom-btn">Calculate</button></div> '
let modtab = '<div class="modal-header mx-auto d-block text-center"><h3>Modular Arithmetic</h3></div><div class="modal-body mx-auto d-block text-center" style="display: inline;"><h4>mod <input type="number" class="inp" id="mode"><h4><span class="" style="font-size: 16px; color: red;"><input type="number" class="inp" id="add1"></span><span class="mult" style=" color: red; margin-right: 0px;font-size: 36px; " > +</span><span class="" style="font-size: 16px; color: red; margin-left: 30px;" > <input type="number" class="inp" id="add2" ></span> <br> <span class="" style="font-size: 16px; color: red;"><input type="number" class="inp" id="mult1"></span><span class="mult" style=" color: red; margin-right: 0px;font-size: 36px; " > *</span><span class="" style="font-size: 16px; color: red; margin-left: 30px;" ><input type="number" class="inp" id="mult2"></span> <br><span class="" style="font-size: 16px; color: red;"><input type="number" class="inp" id="min1"></span><span class="mult" style=" color: red; margin-right: 0px;font-size: 36px; " > -</span><span class="" style="font-size: 16px; color: red; margin-left: 30px;" ><input type="number" class="inp" id="min2"></span></div><div class="modal-footer mx-auto d-block text-center"> <div class="mod-answer"></div><button type="button" class="btn btn-danger" id="mod-btn">Calculate</button></div> '
let meantab = '<div class="modal-header mx-auto d-block text-center"><h3>Measure of central tendency</h3></div><div class="modal-body mx-auto d-block text-center" style="display: inline;"><div class="list" id="meanlist">Array of numbers: </div> <br><button class="addfig btn btn-danger">add to list and clac</button><input type="number" class="inp" id="numbers"></div><div class="modal-footer mx-auto d-block text-center"> <div class="mean-answer"></div><select class="selectTrig" id="centraltend"><option value="mean">Calc arithmetic mean</option><option value="median">Calculate median</option><option value="mode">Calculate Mode</option></select></div> '
let deviationtab = '<div class="modal-header mx-auto d-block text-center"><h3>Measure of Dispersion</h3></div><div class="modal-body mx-auto d-block text-center" style="display: inline;"><div class="list" id="devlist">Array of numbers: </div> <br><button class="addnum btn btn-danger">add to list and calc</button><input type="number" class="inp" id="numberinp"></div><div class="modal-footer mx-auto d-block text-center"> <div class="dev-answer"></div><select class="selectTrig" id="dispersion"><option value="meanndev">Calc Mean deviation</option><option value="variance">Calculate Variance</option><option value="sd">Calculate standaed deviation</option></select></div> '
let abouttab = '<div class="modal-header mx-auto d-block text-center"><h3 class="about">About Developer</h3></div><div class="modal-body mx-auto d-block text-center" style="display: inline;"><div class="me">ME</div><img src="meda.jpg" alt=""><div class="me"><span>MYself</span> <span id="and" class="me">and</span> <span class="me">I</span></div></div><div class="modal-footer mx-auto d-block text-center"> <h6 style="color: rgb(129, 10, 10); font-family: cursive;"> A software developer <br> @ <br> meda360 software</h6></div>    '

//========================function t0 dismiss the side tab=========================================================//
function adjust () {
    document.querySelector('.modal-content').insertAdjacentHTML('afterbegin', closes )
    $('.closemodal').click(function(){
        document.querySelector('.modal-content').innerHTML= "<h3 class='heading'>click the top menu icon</h3>"
    })
        let widthDimension = $('.side').css("width")
        if(widthDimension == "200px"){
            document.querySelector('.side').style.width = "0px"
        }
}
//=============================FACTORIAL CALCULATION=======================================================//
document.querySelector('.T-facto').addEventListener('click', function(){
    document.querySelector('.modal-content').innerHTML= factorialtab
   adjust()
    
    $('#facto-btn').click(function(){
       
        let initial = 1
        let value = $('#factorial').val()
        for(let i=value; i>=1; i--){
            initial*=i
        } 
        console.log(initial);
        document.querySelector('.answer').textContent= initial
    })
})




//======================================PERMUTATION CALCULATION=============================================//
$('.T-permu').click(function(){
    document.querySelector('.modal-content').innerHTML = permutationtab
    adjust()
    $('#perm-btn').click(function(){
        let Nfacto =1
        let diffacto = 1
        let Nvalue = $('#enn').val()
        let Pvalue = $('#pee').val()
        let diff = Nvalue - Pvalue
        
        for(let i=Nvalue; i>=1; i--){
            Nfacto*=i
        }

        for(let i=diff; i>=1; i--){
            diffacto*=i
        }
        
        let answer = Nfacto/diffacto
        if(Nvalue >= Pvalue){
            document.querySelector('.perm-answer').textContent= answer
            $('.perm-answer').css("color", "lightgreen")
        }else{
            document.querySelector('.perm-answer').textContent= 'oops!!. MATHEMATICS ERROR'
            $('.perm-answer').css("color", "red")
        }

    })

})


//===============================================COMBINATION CALCULATION============================================//
$('.T-combi').click(function(){
    document.querySelector('.modal-content').innerHTML = combotab
      adjust()
    

    $('#combo-btn').click(function (){
        let Nfactor =1
        let Pfacto = 1
        let diffactor = 1
        let Nval = $('#ennn').val()
        let Pval = $('#peee').val()
        for(let i=Nval; i>=1; i--){
            Nfactor*=i
        }
    
        for(let i=Pval; i>=1; i--){
            Pfacto*=i
        }
        
        let differ = Nval - Pval
        for(let i=differ; i>=1; i--){
            diffactor*=i
        }

         let answer = Nfactor/(Pfacto*diffactor)

         if(Nval >= Pval){
            document.querySelector('.comb-answer').textContent= answer
            $('.comb-answer').css("color", "lightgreen")
        }else{
            document.querySelector('.comb-answer').textContent= 'oops!!. MATHEMATICS ERROR'
            $('.comb-answer').css("color", "red")
        }
    
    })
   
})


//=================================================MATRIX CALCULATION==================================//

$('.T-2by2').click(function(){
    document.querySelector('.modal-content').innerHTML= matrixtab
    adjust()


    $('#matrix-btn').click(function(){
        
       let a11 = $('#a11').val()
       let a12 = $('#a12').val()
       let a21 = $('#a21').val()
       let a22 = $('#a22').val()
       
       let answer = (a11 * a22) - (a12 * a21)
       document.querySelector('.matrix-answer').textContent= answer
    })
})



//=====================================================MATRIX 3 BY 3 CALCULATOR================================//
$('.T-3by3').click(function (){
    document.querySelector('.modal-content').innerHTML= matrix3tab 
   adjust()
    $('#matric-btn').click(function(){
       let b11 = $('#b11').val()
       let b12 = $('#b12').val()
       let b13 = $('#b13').val()
       let b21 = $('#b21').val()
       let b22 = $('#b22').val()
       let b23 = $('#b23').val()
       let b31 = $('#b31').val()
       let b32 = $('#b32').val()
       let b33 = $('#b33').val()

      let first = b11* ((b22*b33)-(b23*b32))
      let second = b12 *((b21*b33)-(b23*b31))
      let third = b13 *((b21*b32)-(b22*b31))

      let ans = first - second + third
      alert(ans)
      document.querySelector('.matric-answer').textContent= ans
    })
})

//=============================================QUADRATIC EQUATION===============================================//
$('.T-quad').click(function (){
    document.querySelector('.modal-content').innerHTML= quadratictab
       adjust()

    $('#quad-btn').click(function(){
        let a = $('#a').val()
        let b = $('#b').val()
        let c = $('#c').val()
        
        let answer1= ( (0-b) + Math.sqrt((b*b) - (4*a*c)) )/(2*a)
        let answer2 = ( (0-b) - Math.sqrt((b*b) - (4*a*c)) )/(2*a)
        let answer = `x equals ${answer1} or x equals ${answer2}`
        
            document.querySelector('.quad-answer').textContent= answer;
        
        
    })
})



//==============================================SIMULTANEOUS EQUATION========================================//
$('.T-simul').click(function(){
    document.querySelector('.modal-content').innerHTML= simultab
    adjust()

    $('#simul-btn').click(function(){
        let x1 = $('#x1').val()
        let y1 = $('#y1').val()
        let c1 = $('#c1').val()
        let x2 = $('#x2').val()
        let y2 = $('#y2').val()
        let c2 = $('#c2').val()

        let deta = (x1 * y2) - (y1 * x2)
        console.log(deta);

        let Dx = (c1 * y2) - (y1 * c2)
        console.log(Dx);

        let Xans = Dx/deta
        console.log(Xans);

        let Dy = (x1 * c2) - (c1 * x2)
        console.log(Dy);

        let Yans = Dy/deta

        let finalans = `x = ${Xans} and y = ${Yans}`
        document.querySelector('.simul-answer').textContent= finalans;
    })
})
//==========================================TRIGONOMETRY==========================================//
$('.T-trig').click(function (){
    document.querySelector('.modal-content').innerHTML= trigtab
    adjust()
    $('#trig-btn').click(function(){
        let answer;
       let value = $('#selectTrig').val()
       let number = $('#trig-val').val()
       if (value == 'asin' || value=='acos' || value=='atan'){
         answer= Math[value](number)
         answer = answer * 180/Math.PI
         answer = Math.round(answer*10)/10
       }else{
        answer = Math[value](number * Math.PI/180)
        answer = Math.round(answer * 100000)/100000
        
       }
       document.querySelector('.trig-answer').textContent= answer
       
      
    })
})
//=====================================LATITUDE AND LONGTITUDE===========================================//
$('.T-lat').click(function(){
    document.querySelector('.modal-content').innerHTML= latitudetab
    adjust()
    $('#lat-btn').click(function(){
        let la1 = $('#la1').val()
        let la2 = $('#la2').val()
        let lo1 = $('#lo1').val()
        let lo2 = $('#lo2').val()
        let la1c = $('#la1c').val()
        let la2c = $('#la2c').val()
        let lo1c = $('#lo1c').val()
        let lo2c = $('#lo2c').val()
        let tita
        
        let answer
         if(la1==la2){
            if(lo1c==lo2c){
                tita = lo2-lo1
            }else{
                tita = parseFloat(lo2)+parseFloat(lo1)
            }
           var alpha= Math.cos(la1 * Math.PI/180)
            console.log(alpha);
            answer = (tita/360)*2*3.142*6400*alpha
         }else if(lo1==lo2){
             if(la1c==la2c){
                 tita= la2-la1
                 tita = Math.abs(tita)
             }else{
                 tita=parseFloat(la2)+parseFloat(la1)
             }
             answer = (tita/360)*2*3.142*6400
         }else{
             answer='no answer'
         }
            
            
            
            document.querySelector('.lat-answer').textContent= answer
        
    })
    


})
//=====================================================LOGARITM===================================================//
$('.T-log').click(function(){
    document.querySelector('.modal-content').innerHTML= logtab
    adjust()
    $('#log-btn').click(function(){
        let val = $('#log').val()
        let answer = Math.log10(val)
        document.querySelector('.log-answer').textContent= answer
        
    })
})


//==========================================NATURAL LPGARITHM=====================================================//
$('.T-Nlog').click(function(){
    document.querySelector('.modal-content').innerHTML= Nlogtab
    adjust()
    $('#Nlog-btn').click(function(){
        let val = $('#Nlog').val()
        let answer = Math.log(val)
        document.querySelector('.Nlog-answer').textContent= answer
        
    })
})
//=======================================ARITHMETIC PROGRESSION=============================================//
$('.T-ap').click(function(){
    document.querySelector('.modal-content').innerHTML= apTab
    adjust()
    $('#ap-btn').click(function(){
        let ft = $('#ft').val()
        let cd = $('#cd').val()
        let nt = $('#nth-term').val()
        
        let select = $('#apselect').val()
        //alert(select)
        if(select=='nthofap'){
            let answer =((nt-1)*cd)
            let finalans =parseFloat(ft)  + parseFloat(answer)
            document.querySelector('.ap-answer').textContent= finalans
        }else{
            let answer = (ft*2) + (nt-1)*cd
            answer = (nt/2)*answer
            document.querySelector('.ap-answer').textContent= answer
        }
        
        
    })
})

//=================================GEOMETRIC PROGRESSION==============================================//
$('.T-gp').click(function(){
    document.querySelector('.modal-content').innerHTML= gptab
    adjust()
    $('#gp-btn').click(function(){
        let ft = $('#ftm').val()
        let cr = $('#cr').val()
        let nt = $('#nth-term-g').val()
        let select = $('#gpselection').val()
        let answer
        
        if (select=='nthofgp'){
            answer = ft*Math.pow(cr, nt-1)
        }else if(select=='sumofgp'){
          let  numerator =ft * (1-(Math.pow(cr,nt)))
          let denominator = 1-cr
          answer = numerator/denominator    
        }else{
            answer = ft/(1-cr)
        }
        
       
        
        document.querySelector('.gp-answer').textContent= answer
    })
})
//============================================COORDINATE GEOMETRY====================================================//
$('.T-geom').click(function(){
    document.querySelector('.modal-content').innerHTML= geomtab
    adjust()
    $('#geom-btn').click(function(){
        let answer
        let option = $('#geom').val()
        let x1 = $('#x1').val()
        let y1= $('#y1').val()
        let x2 = $('#x2').val()
        let y2 = $('#y2').val()
        let Dy = y2-y1
        let Dx = x2-x1
        console.log(x1, y1, x2, y2);
        if(option=='slope'){
            answer = Dy/Dx
            answer = Math.round(answer*100)/100
        }else{
            answer = Math.sqrt(Dy*Dy + Dx*Dx)
            answer = Math.round(answer*100)/100
            answer = answer + 'units'
        }
        document.querySelector('.geom-answer').textContent= answer
    })
    

})
//================================MODULAR ARITHMETIC==================================================//
$('.T-mod').click(function(){
    document.querySelector('.modal-content').innerHTML= modtab
    adjust()
    $('#mod-btn').click(function(){
        let add1 = $('#add1').val()
        let add2 = $('#add2').val()
        let mult1 = $('#mult1').val()
        let mult2 = $('#mult2').val()
        let min1 = $('#min1').val()
        let min2 = $('#min2').val()
        let mod =  $('#mode').val()
        let answer
        if(add1 !== "" && add2 !== ""){
             answer = parseFloat(add1) + parseFloat(add2)
             let ans = answer%mod
             answer = `${ans}(mod${mod})`
             
        }else if(mult1 !== "" && mult2 !== ""){
            answer = mult1 * mult2
            let ans = answer%mod
            answer = `${ans}(mod${mod})`
            
        }else if(min1 !== "" && min2 !== ""){
            answer = parseFloat(min1) - parseFloat(min2)
            let ans = answer%mod
            answer = `${ans}(mod${mod})`
            
        }else{
            answer= "haa!!! can't solve this problem"
        }

        document.querySelector('.mod-answer').textContent= answer
        
    })
})

//=============================================ARITHMETIC MEAN=======================================//
let meanarr=[]
function push (){
    let num = $('#numbers').val()
    if(num !== ""){
        num = parseFloat(num)
        meanarr.push(num)
        $('#meanlist').append(`${num}||`)
        document.querySelector('#numbers').value = ""
        
    }else{
        alert('input field should not be empty')
    }
    
}



$('.T-mean').click(function(){
    
   
    document.querySelector('.modal-content').innerHTML= meantab
    adjust()
    $('.addfig').click(function(){
        
        var total = 0
        let answer;
        let select = $('#centraltend').val()
        console.log(select);
        push()
        
        if(select=="mean"){
            for(let i=0; i<=meanarr.length-1; i++){
                total+=meanarr[i]
             }
             console.log(total);
            answer = total/meanarr.length
        }else if(select == "median"){
            meanarr.sort((a,b)=>{
                return a-b
            })
            console.log(meanarr);
            var testodd = meanarr.length%2
            if(testodd > 0){
               let median = (meanarr.length +1)/2
               answer = meanarr[median-1]
               
            }else{
               let median = (meanarr.length)/2
               answer = meanarr[median-1]
            }
            console.log(testodd);
        }else{
            var mf = 1         
            var m =0
            var item;
            for(let i=0; i<=meanarr.length-1; i++){
                
                for (let j = i; j < meanarr.length; j++) {
                    if(meanarr[i] == meanarr[j]) { m++ }
                    if(mf < m) {  
                        item=meanarr[i]
                         mf=m 
                    }
                }
                m=0
            }// for loop(i) terminal
                console.log(meanarr);
                answer = `${item}: (occurs ${mf} times)`
            
            
        }
       
        
        document.querySelector('.mean-answer').textContent= answer
        
    })
})

//===================================Measure of dispersion==================================================//
let arr = []
$('.T-dev').click(function(){
    document.querySelector('.modal-content').innerHTML= deviationtab
    adjust()
    $('.addnum').click(function(){
        let value = $('#numberinp').val()
        let select = $('#dispersion').val()
        let x = 0
        let n=0
        let y=0
        let z=0
        let w=0
        let answer;
        if(value !== ""){
            value = parseFloat(value)
            $('#devlist').append(`${value}||`)
            arr.push(value)
            arr.forEach(element => {
                x+=element
            });
            document.querySelector('#numberinp').value = ""
        }else{
            //alert('add a number to the input field')
        }
        
        
        console.log(arr);
        if(select=="meanndev"){
            let xbar = x/arr.length
            console.log(xbar);
            function subt (num){
                return num - xbar
            }
           
            let x_xbarArr = arr.map(subt)
            let Absx_xbarArr = x_xbarArr.map(Math.abs)
            
            console.log(Absx_xbarArr);
            
            Absx_xbarArr.forEach(element => {
                y+=element
            });
            
            answer = y/Absx_xbarArr.length
            console.log(answer);


        }else if(select=="variance"){
            
                function subt2 (no){
                    return no - xbar2
                }
                arr.forEach(element => {
                    n+=element
                })
                let xbar2 =n/arr.length
                console.log(xbar2);
                let x_xbarArr = arr.map(subt2)
                let Absx_xbarArr = x_xbarArr.map(Math.abs)
    
                function sqr (fig){
                    return Math.pow(fig, 2)
                }
                let sqrArr = Absx_xbarArr.map(sqr)
                console.log(Absx_xbarArr);
                console.log(sqrArr);
    
                sqrArr.forEach(element => {
                    z+=element
                });
    
                console.log(z);
                answer = z/sqrArr.length
                
            
            
        }else{
            function subt3 (nos){
                return nos - xbar3
            }
            arr.forEach(element => {
                n+=element
            })
            let xbar3 =n/arr.length
            console.log(xbar3);
            let x_xbarArr = arr.map(subt3)
            let Absx_xbarArr = x_xbarArr.map(Math.abs)

            function sqrs (fig){
                return Math.pow(fig, 2)
            }
            let sqrArr = Absx_xbarArr.map(sqrs)
            console.log(Absx_xbarArr);
            console.log(sqrArr);

            sqrArr.forEach(element => {
                w+=element
            });

            console.log(w);
            answer = w/sqrArr.length
             answer = Math.sqrt(answer)
            console.log(answer); 
        
        }
       
        
        document.querySelector('.dev-answer').textContent= answer
    })
})
//================================ABOUT TAB=======================================================//
$('.T-about').click(function(){
    document.querySelector('.modal-content').innerHTML = abouttab
    adjust()
})