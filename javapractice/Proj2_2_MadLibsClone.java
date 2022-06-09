package javapractice;

import java.util.Scanner;

public class Proj2_2_MadLibsClone {

    public static void main(String[] args) {

        Scanner inputReader = new Scanner(System.in);

        String adjective1;
        String girlName;
        String adjective2;
        String occuption1;
        String place;
        String clothing;
        String hobby;
        String adjective3;
        String occuption2;
        String boyName;
        String manName;

        System.out.println("Enter adjective1: ");
        adjective1 = inputReader.nextLine();

        System.out.println("Enter girl name: ");
        girlName = inputReader.nextLine();

        System.out.println("Enter adjective2: ");
        adjective2 = inputReader.nextLine();

        System.out.println("Enter Occuption1: ");
        occuption1 = inputReader.nextLine();

        System.out.println("Enter place name: ");
        place = inputReader.nextLine();

        System.out.println("Enter clothing: ");
        clothing = inputReader.nextLine();

        System.out.println("Enter hobby: ");
        hobby = inputReader.nextLine();

        System.out.println("Enter Occuption2: ");
        occuption2 = inputReader.nextLine();

        System.out.println("Enter Adjective3: ");
        adjective3 = inputReader.nextLine();

        System.out.println("Enter boy name: ");
        boyName = inputReader.nextLine();

        System.out.println("Enter man name: ");
        manName = inputReader.nextLine();


        System.out.println("There once was a" + adjective1 + " girl named " + girlName + " who\n " +
                "was a " + adjective2 + " " + occuption1 + " in the kingdom of " + place + " .");
        System.out.println("She loved to wear " + clothing + " and to " + hobby + " .");

        System.out.println("She wanted to marry the "+adjective3+" "+occuption2+
                " named "+boyName+" , but her father, king "+manName+", forbid her from seeing him.");
    }
}
