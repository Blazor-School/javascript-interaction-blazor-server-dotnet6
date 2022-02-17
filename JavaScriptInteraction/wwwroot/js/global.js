function exampleFunction()
{
    alert("exampleFunction from global.js called");
}

async function callStaticLocalComponentMethod()
{
    let result = await DotNet.invokeMethodAsync("JavaScriptInteraction", "LocalStaticMethod");
    alert(result);
}