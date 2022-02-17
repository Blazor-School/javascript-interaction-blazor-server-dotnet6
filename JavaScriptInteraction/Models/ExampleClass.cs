using Microsoft.JSInterop;

namespace JavaScriptInteraction.Models;

public class ExampleClass
{
    public string ExampleString { get; set; } = "";
    public int ExampleInt { get; set; }
    public DateTime ExampleDate { get; set; }

    [JSInvokable]
    public void ExampleVoidMethod() => ExampleString = $"{nameof(ExampleVoidMethod)} called";

    [JSInvokable]
    public Task ExampleVoidMethodAsync()
    {
        ExampleString = $"{nameof(ExampleVoidMethodAsync)} called";

        return Task.CompletedTask;
    }

    [JSInvokable("MethodWithPrimitiveParameters")]
    public void ExamplePrimitiveParameterizedMethod(string exampleString, int exampleInt, DateTime exampleDate)
    {
        ExampleString = exampleString;
        ExampleInt = exampleInt;
        ExampleDate = exampleDate;
    }
    
    [JSInvokable("MethodWithReferenceParameters")]
    public void ExampleReferenceParameterizedMethod(ExampleClass instance)
    {
        ExampleString = instance.ExampleString;
        ExampleInt = instance.ExampleInt;
        ExampleDate = instance.ExampleDate;
    }

    [JSInvokable]
    public string ExamplePrimitiveReturnMethod() => ExampleString;

    [JSInvokable]
    public (string,int) ExampleToupleReturnMethod() => (ExampleString, ExampleInt);

    [JSInvokable]
    public ExampleClass ExampleReferenceReturnMethod() => this;
}
