package org.example;

public final class FancyClassWithStaticMethod {

    public static FancyObject getFancyObject(ObjectParam1 objectParam1, ObjectParam2 objectParam2) throws Exception{
        return  new FancyObject(objectParam1, objectParam2);
    }
}
