class CollocatedJs
{
    collocateFunction = function ()
    {
        alert("CollocatedJs module loaded.");
    }
}

let instance = new CollocatedJs();

export function CollocatedJsInstance()
{
    return instance;
}