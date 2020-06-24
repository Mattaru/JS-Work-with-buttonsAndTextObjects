const textObject = {"text":["Жили-были {var1} да {var2}","Была у них {var3}","Снесла {var3} {var4}, не простое - золотое","- {var1} бил, бил - не разбил","- {var2} била, била - не разбила","{var5} бежала, {var6} задела, {var4} упало и разбилось.","{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"]}

/* show text */

function showObject() {
    document.querySelector(".output").innerHTML = textObject["text"].join(" ");
};

/* input variables */

function variables() {
    const Var1 = document.getElementById("var1").value;
    const Var2 = document.getElementById("var2").value;
    const Var3 = document.getElementById("var3").value;
    const Var4 = document.getElementById("var4").value;
    const Var5 = document.getElementById("var5").value;
    const Var6 = document.getElementById("var6").value;
    const Speach = document.getElementById("speach").value;

    const newText = {
    "text":[`Жили-были ${Var1} да ${Var2}`,
        `Была у них ${Var3}`,
        `Снесла ${Var3} ${Var4},не простое - золотое`,
        `- ${Var1} бил, бил - не разбил`,
        `- ${Var2} била, била - не разбила`,
        `${Var5} бежала, ${Var6} задела, ${Var4} упало и разбилось.`,
        `${Var1} плачет, ${Var2} плачет, а ${Var3} кудахчет:`,`${Speach}`]};

document.querySelector(".output-normal").innerHTML = newText["text"].join(" ");
};
