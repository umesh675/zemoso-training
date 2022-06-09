package javapractice.filepractice;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.InputMismatchException;
import java.util.Scanner;

public class FileInput {

    public static void main(String[] args) {

        Scanner inFile;

        try{
            inFile = new Scanner(new File("F:\\Internship\\src\\main\\java\\javapractice\\filepractice\\input.txt"));

            while (inFile.hasNext()){
                int val = inFile.nextInt();

                System.out.println(val);
            }

            inFile.close();

        } catch (FileNotFoundException msg) {
            System.out.println("file not found");
        }
        catch (InputMismatchException msg){
            System.out.println("value you want to read does not match");
        }
    }
}
