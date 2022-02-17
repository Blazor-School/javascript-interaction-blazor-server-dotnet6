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
    alert(`Received: string ${stringData}, number ${numberData}, date time ${dateTimeData}`);
}

export function methodWithReferenceParameter(csharpObjectReference)
{
    alert(`Received object not null? - ${csharpObjectReference != null}`);
}

export function methodWithObjectParameter(csharpObject)
{
    alert(`Received object data: string ${csharpObject.exampleString}, number ${csharpObject.exampleInt}, date time ${csharpObject.exampleDate}`);
}

export function callSynchronousCSharpMethod(csharpObject)
{
    csharpObject.invokeMethodAsync("ExampleVoidMethod");
}

export async function callAsynchronousCSharpMethod(csharpObject)
{
    await csharpObject.invokeMethodAsync("ExampleVoidMethodAsync");
}

export function callPrimitiveParameterizedCSharpMethod(csharpObject)
{
    csharpObject.invokeMethodAsync("MethodWithPrimitiveParameters", "Blazor School", 100, new Date());
}

export function callReferenceParameterizedCSharpMethod(csharpObject)
{
    let passingObject = {
        exampleString: "Blazor School",
        exampleInt: 9000,
        exampleDate: new Date()
    };

    csharpObject.invokeMethodAsync("MethodWithReferenceParameters", passingObject);
}

export function callLocalComponentMethod(componentInstance)
{
    componentInstance.invokeMethodAsync("LocalMethod");
}

export async function callPrimitiveDataReturnMethod(csharpObject)
{
    let result = await csharpObject.invokeMethodAsync("ExamplePrimitiveReturnMethod");
    alert(`The result is ${result}`);
}

export async function callToupleDataReturnMethod(csharpObject)
{
    let result = await csharpObject.invokeMethodAsync("ExampleToupleReturnMethod");
    console.info(result);
}

export async function callReferenceDataReturnMethod(csharpObject)
{
    let result = await csharpObject.invokeMethodAsync("ExampleReferenceReturnMethod");
    alert(`Received object data: string ${result.exampleString}, number ${result.exampleInt}, date time ${result.exampleDate}`)
}