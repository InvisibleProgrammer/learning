package com.invisibleprogrammer;

import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> myList = new LinkedList<>();

        int listSize = 10000;

        for (Integer i = 0; i < listSize; i++){
            myList.add(i);
        }

        Integer elementToFind = Integer.valueOf(5000);

        Integer element = findElementWithLoop(myList, elementToFind);
        System.out.println(element);

        element = findElementWithStreams(myList, elementToFind);
        System.out.println(element);

    }

    private static Integer findElementWithStreams(List<Integer> myList, Integer elementToFind) {
        return myList.stream().
                filter(element -> element.equals(elementToFind))
                .findFirst()
                .orElse(null);
    }

    private static Integer findElementWithLoop(List<Integer> myList, Integer elementToFind) {
        for (Integer element :
                myList) {
            if (element.equals(elementToFind)){
                return element;
            }
        }

        return null;
    }
}