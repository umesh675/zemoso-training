package javapractice;

public class RelationalFun {

    public static void main(String[] args) {

        int myAge = 15;
        int yourAge = 40;
        int bobAge = 45;

        String str1 = "John";
        String str2 = new String("John");

        System.out.println("myAge>yourAge ? "+ (myAge>yourAge));

        System.out.println("bobAge>yourAge? "+ (bobAge>yourAge));

        System.out.println("yourAge and myAge equal ?" +(yourAge==myAge));

        System.out.println("str1 and str2 are equals ?" +str1.equals(str2));
    }
}
