function  insert(num)
{
    document.form.textView.value = document.form.textView.value+ num;

}
function clean()
{
    document.form.textView.value = "";
}
function equal()
{
    var x =  document.form.textView.value;

    if(x)
    {
        document.form.textView.value = eval(x);
    }
}