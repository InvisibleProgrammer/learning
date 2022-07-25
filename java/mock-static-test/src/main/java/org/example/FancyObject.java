package org.example;

public class FancyObject {
    String name;

    public FancyObject(ObjectParam1 objectParam1, ObjectParam2 objectParam2) {
        objectParam1.toString();
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }
}
