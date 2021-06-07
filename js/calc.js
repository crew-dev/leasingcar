
const calculatorInputMoney = document.querySelector('#money');
const calculatorInputInstallment = document.querySelector('#prepaid');
const calculatorInputTerm = document.querySelector('#term_contract_input');
const allCosts = document.querySelector('#allСosts');
const calculatorItem = document.querySelectorAll('.calculator__item')
const resultsTextSpan = document.querySelector('#resultsTextSpan')
const totalNds = document.querySelector('#TotalNds')
console.log(allCosts);
for (let i = 0; i < calculatorItem.length; i++) {
  calculatorItem[i].addEventListener('click', (event) => {
        for (let i = 0; i < calculatorItem.length; i++) {
          calculatorItem[i].classList.remove('calc_item__active');
                if (event.target==calculatorItem[i]) {
                  event.target.classList.add('calc_item__active')
                }
        }
        switch (event.target) {
          case calculatorItem[0]:
            carprice.value = '200000 Р'
            money.setAttribute('min', '200000')
                money.value = '200000'
                minCost.textContent = '200 000 P'
                first_installment.value = '5%'
                prepaid.value = '5'
                outcome_term_contract.value = '12 месяцев'
                term_contract_input.value = '12'
                result_sum()
                break;
        
                case calculatorItem[1]:
                carprice.value = '200000 Р'
                money.setAttribute('min', '200000')
                money.value = '200000'
                minCost.textContent = '200 000 P'
                first_installment.value = '5%'
                prepaid.value = '5'
                outcome_term_contract.value = '12 месяцев'
                term_contract_input.value = '12'
                result_sum()
                break;
            case calculatorItem[2]:
              carprice.value = '1000000 Р'
                money.setAttribute('min', '1000000')
                money.value = '1000000'
                minCost.textContent = '1 000 000 P'
                first_installment.value = '5%'
                prepaid.value = '5'
                outcome_term_contract.value = '12 месяцев'
                term_contract_input.value = '12'
                result_sum()
                break;
            case calculatorItem[3]:
                carprice.value = '1000000 Р'
                money.setAttribute('min', '1000000')
                money.value = '1000000'
                minCost.textContent = '1 000 000 P'
                first_installment.value = '5%'
                prepaid.value = '5'
                outcome_term_contract.value = '12 месяцев'
                term_contract_input.value = '12'
                result_sum()
                break;
                case calculatorItem[4]:
                carprice.value = '1000000 Р'
                money.setAttribute('min', '1000000')
                money.value = '1000000'
                minCost.textContent = '1 000 000 P'
                first_installment.value = '5%'
                prepaid.value = '5'
                outcome_term_contract.value = '12 месяцев'
                term_contract_input.value = '12'
                result_sum()
                break;
                case calculatorItem[5]:
                carprice.value = '1000000 Р'
                money.setAttribute('min', '1000000')
                money.value = '1000000'
                minCost.textContent = '1 000 000 P'
                first_installment.value = '5%'
                prepaid.value = '5'
                outcome_term_contract.value = '12 месяцев'
                term_contract_input.value = '12'
                result_sum()
                break;
                case calculatorItem[6]:
                  carprice.value = '1000000 Р'
                money.setAttribute('min', '1000000')
                money.value = '1000000'
                minCost.textContent = '1 000 000 P'
                first_installment.value = '5%'
                prepaid.value = '5'
                outcome_term_contract.value = '12 месяцев'
                term_contract_input.value = '12'
                result_sum()
                break;
            case calculatorItem[7]:
              carprice.value = '1000000 Р'
              money.setAttribute('min', '1000000')
                money.value = '1000000'
                minCost.textContent = '1 000 000 P'
                first_installment.value = '5%'
                prepaid.value = '5'
                outcome_term_contract.value = '12 месяцев'
                term_contract_input.value = '12'
                result_sum()
                break;
                
              }
            })
          }
          
          
          n_nds(); avans(1);
          ncost=0;  
          nnds=0;  
tavans=0;  
sumavans=0;  
procavans=0;  
plat_mesiac=0;  
mes_proc=0;  
term=0;  

function rz(rubl) { 
 str=""; 
 s=""; 
st=""+rubl; 
toshka=st.indexOf("."); 
if (toshka==-1){ 
  toshka=st.length;  
  //  s=",00"; 
} else {} 
n=Math.ceil(toshka/3); 
for (i=0; i<n; i++)  
{ 
  str+=st.substring(toshka-(3*(n-i)),toshka-(3*(n-i))+3); 
} 

str+=s;  
return (str); 

}
function n_nds() {  
  ncost=Math.round(calculatorInputMoney.value*1);  
}  
function avans(t) {  
  if (t==1) {tavans=1; sumavans=Math.round(calculatorInputInstallment.value*1*calculatorInputMoney.value)/100; avansrub=sumavans; procavans=calculatorInputInstallment.value*1;}  
  //  if (t==2) {tavans=2; procavans=Math.round(avansrub*100/(calculatorInputMoney.value*1)); calculatorInputInstallment.value=procavans; sumavans=calculatorInputMoney.value*procavans/100; avansrub=sumavans;}  
  
}  
function result_sum() {  
  avans(1)
  n_nds()
  if (calculatorInputTerm.value==""){alert('Пожалуйста, укажите предмет лизинга.'); return false;} 
term=calculatorInputTerm.value*1;  
plat_mesiac=(ncost-sumavans)/(calculatorInputTerm.value*1);  
  
var mes_nds = new Array(calculatorInputTerm.value*1);  
var poln_plat_mesiac = new Array(calculatorInputTerm.value*1);  
mes_proc = ncost*4/100/12;  
var year_plat = new Array(3);  
   
for (i=0; i<(calculatorInputTerm.value*1); i++)  
{  
  mes_nds[i]=(ncost-sumavans-(plat_mesiac*i))*14/100/12;  
  poln_plat_mesiac[i]=plat_mesiac+mes_nds[i]+mes_proc;  
last_year=Math.floor(i/12);  
last_month=i%12;  
if (last_month==0) year_plat[last_year]=0;  
year_plat[last_year]+=poln_plat_mesiac[i];  
}  

poln_plat=0;  

let mon 
for (y=0; y<=last_year; y++)  
{  
  if (y==last_year) {mmm=last_month;} else {mmm=11;}  
   for (m=0; m<=mmm; m++)  
  {  
    
    }  
    poln_plat+=(Math.round(year_plat[y]/(mmm+1)))*(mmm+1);
    mon = rz((Math.round(year_plat[y]/(mmm+1))))
    console.log(year_plat);
    // monthlyPayment.textContent = mon;  
  } 
  
  const monthlyPayment = document.querySelector('#monthlyPaymentSpan')
 const outcomeFirstInstallment = document.querySelector('#first_installment');
 const outcomeMoney = document.querySelector('#carprice');
 const outcomeTermContract = document.querySelector('#outcome_term_contract');
 const resultsText = document.querySelector('.results__text')
 const resultsTextList = document.querySelector('#resultTextList')
 avans(1);
 
 outcomeMoney.value = calculatorInputMoney.value + ' P';
 outcomeFirstInstallment.value = calculatorInputInstallment.value + "%";
 outcomeTermContract.value=calculatorInputTerm.value + ' месяцев';
 resultsTextSpan.textContent = Math.round(rz(poln_plat+sumavans)) + " ₽";
const nds2 = document.querySelector('#nds')
n_nds()
totalNds.innerHTML = rz(Math.round((poln_plat+sumavans)*20/120*100)/100) + " ₽";
monthlyPayment.textContent = mon + ' ₽'
 allСosts.textContent = Math.round(calculatorInputMoney.value/1.18*1) + ' ₽'
 resultsTextList.textContent = rz(Math.round((poln_plat+sumavans)*20/120*100)/100) + ' ₽'
 console.log(resultsTextList);
}
result_sum();



const outcomeFirstInstallment = document.querySelector('#first_installment');
calculatorInputInstallment.addEventListener('input', ()=>{
  result_sum()
})
const outcomeMoney = document.querySelector('#carprice');
calculatorInputMoney.addEventListener('input', ()=>{
  result_sum()

})
const outcomeTermContract = document.querySelector('#outcome_term_contract');
calculatorInputTerm.addEventListener('input', ()=>{
  result_sum()
})
;
