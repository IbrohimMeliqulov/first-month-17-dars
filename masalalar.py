import re
import collections
# leetcode 599 minimum index sum of two lists

# def findRestaurant(list1:list,list2:list)->list:
#     dct={}
#     for i in range(len(list1)):
#         for j in range(len(list2)):
#             if list1[i]==list2[j]:
#                 dct[list1[i]]=i+j
    
#     lst=[]
#     n=min(dct.values())
#     for key,value in dct.items():
#         if value==n:
#             lst.append(key)

#     return lst

# list1 = ["Shogun","Tapioca Express","Burger King","KFC"]
# list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
# print(findRestaurant(list1,list2))

# 819 Most common word

def mostCommonWord(paragraph:str,banned:list[str])->str:
    paragraph=re.sub(r'[^\w\s]', ' ', paragraph).lower().split()
    banned=set(banned)
    counts=collections.Counter(paragraph)
    for word,count in counts.most_common():
        if word not in banned:
            return word



paragraph = "a, a, a, a, b,b,b,c, c"
banned = ["a"]
print(mostCommonWord(paragraph,banned))


# 2418 Sort the People

def sortPeople(names:list[str],heights:list[int])->list:
    lst=list(zip(names,heights))
    lst.sort(key=lambda x:x[1],reverse=True)
    lst1=[]
    for name, height in lst:
        lst1.append(name)
    return lst1




names = ["Mary","John","Emma"]
heights = [180,165,170]
print(sortPeople(names,heights))

