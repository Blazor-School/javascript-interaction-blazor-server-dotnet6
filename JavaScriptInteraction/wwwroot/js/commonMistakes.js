export function tryToRemoveBlazorDOM()
{
    document.getElementById("blazorschool").remove();
}

export function callCSharpLoop(csharpObject)
{
    csharpObject.invokeMethodAsync("CallJSLoopAsync")
}