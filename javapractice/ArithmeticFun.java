package javapractice;

public class ArithmeticFun {

    public static void main(String[] args) {

        int a = 10;
        int b = 15;

        // binary operator
        int add = a+b;
        int diff = a-b;
        int mult = a*b;
        int div = b/a;
        int rem = b%a;

        System.out.println(add+"\n"+diff+"\n"+mult+"\n"+div+"\n"+rem);

        // compound arithmetic operation

        add += 20;
        diff -= 5;
        mult *= 5;
        div /= 2;
        rem %= 2;

        System.out.println(add+"\n"+diff+"\n"+mult+"\n"+div+"\n"+rem);

        //uniary operator

        a++;
        b--;

        System.out.println(a+" "+b);

    }
}
