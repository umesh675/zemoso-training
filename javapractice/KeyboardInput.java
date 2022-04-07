package javapractice;

import java.util.Scanner;

public class KeyboardInput {

    public static void main(String[] args) {

        Scanner inputReader = new Scanner(System.in);

        String name;
        int age;
        String cityName;

        System.out.println("Enter your name: ");
        name = inputReader.nextLine();

        System.out.println("Enter your city name: ");
        cityName = inputReader.nextLine();

        System.out.println("Enter your age: ");
        age = inputReader.nextInt();  //after reading integer when we push enter then it will have
                                      // nextline enter in the stream so we have to take
        inputReader.nextLine();

//        System.out.println("Enter your city name: ");
//        cityName = inputReader.nextLine();

        System.out.println("Name: "+name);
        System.out.println("Age: "+age);
        System.out.println("City: "+cityName);

    }
}
