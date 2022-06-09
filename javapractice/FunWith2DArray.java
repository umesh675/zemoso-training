package javapractice;

import java.util.Random;

public class FunWith2DArray {

    public static void main(String[] args) {

        int my2DArr[][] = new int[2][3];

        fill2DArray(my2DArr);
        print2DArray(my2DArr);
    }

    static void fill2DArray(int my2DArray[][]){

        Random random = new Random();

        for(int i = 0 ;i<my2DArray.length ;i++){
            for(int j = 0 ;j<my2DArray[i].length ;j++){

                my2DArray[i][j] = random.nextInt(2);
            }
        }
    }

    static  void print2DArray(int my2DArr[][]){

        for(int i =0 ;i<my2DArr.length;i++){
            for(int j = 0 ;j<my2DArr[i].length;j++){

                System.out.print(my2DArr[i][j]+" ");
            }

            System.out.println();
        }
    }
}
