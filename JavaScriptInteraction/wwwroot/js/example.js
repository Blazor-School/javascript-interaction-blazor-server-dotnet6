export function predictableResult()
{
    return "Ok";
}

export function unpredictableResult()
{
    let randomNum = Math.random() * 10;

    if (randomNum < 3)
    {
        return "Blazor School";
    }

    if (3 < randomNum && randomNum < 6)
    {
        return 10;
    }

    return;
}

export function methodWithPrimitiveParameters(stringData, numberData, dateTimeData)
{
    alert(`Received: string ${stringData}, number ${numberData}, dateTime ${dateTimeData}`);
}

export function methodWithReferenceParameter(csharpObject)
{
    alert(`Received object not null? - ${csharpObject != null}`);
}

export function callSynchronousCSharpMethod(csharpObject)
{
    csharpObject.invokeMethodAsync("ExampleVoidMethod");
}

export function callAsynchronousCSharpMethod(csharpObject)
{
    csharpObject.invokeMethodAsync("ExampleVoidMethodAsync");
}

export function callParameterizedCSharpMethod(csharpObject)
{
    csharpObject.invokeMethodAsync("ExampleVoidMethodWithParameters", "Blazor School", 100, new Date());
}

export function callLocalComponentMethod(componentInstance)
{
    componentInstance.invokeMethodAsync("LocalMethod");
}

export function callStaticLocalComponentMethod()
{
    DotNet.invokeMethodAsync("JavaScriptInteraction", "LocalStaticMethod");
}