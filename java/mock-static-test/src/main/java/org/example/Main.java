package org.example;

public class Main {
    public static void main(String[] args) {

    }

    public String methodToCall(){
        try {
            FancyObject myObject = FancyClassWithStaticMethod.getFancyObject(new ObjectParam1(), new ObjectParam2());

            return myObject.getName();
        } catch (Exception exception){
            System.out.println(exception);
        }

        return null;
    }
}