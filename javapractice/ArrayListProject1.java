package javapractice;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class ArrayListProject1 {

    public static void main(String[] args) throws IOException {

        BufferedReader inputReader = new BufferedReader(new InputStreamReader(System.in));

        ArrayList<Integer> inputArr = new ArrayList<>();

        System.out.println("Enter -1 for exit");

        int val = Integer.parseInt(inputReader.readLine());

        while(val != -1){

            if(val<0){
                System.out.println("Enter positive number");
            }
            else
                inputArr.add(val);

            System.out.println("Enter -1 for exit");

            val = Integer.parseInt(inputReader.readLine());

        }

        System.out.println("output: ");

        for (int i = inputArr.size()-1 ;i>=0 ;i--){
            System.out.println(inputArr.get(i));
        }

    }
}
