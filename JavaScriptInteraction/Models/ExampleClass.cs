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

    [JSInvokable("ExampleVoidMethodWithParameters")]
    public void ExampleParameterizedMethod(string exampleString, int exampleInt, DateTime exampleDate)
    {
        ExampleString = exampleString;
        ExampleInt = exampleInt;
        ExampleDate = exampleDate;
    }
}
