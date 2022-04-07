package javapractice.filepractice;

import java.io.FileNotFoundException;
import java.io.PrintWriter;

public class FileOutput {

    public static void main(String[] args) {

        try{

            PrintWriter fileWriter  = new PrintWriter("F:\\Internship\\src\\main\\java\\javapractice\\filepractice\\output.txt");

            fileWriter.println("I am currently working in Zemoso");
            fileWriter.println("I am learning good things from here");

            fileWriter.close();//close the stream or deallocate any value in it and associated with it
                               // once close can not close again
        }
        catch (FileNotFoundException ex){

            System.out.println("Can not write");
        }
    }
}
