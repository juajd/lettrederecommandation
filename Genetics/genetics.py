from random import *
def newChar():
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
                'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '.', ' ']
    a = int(random()*len(alphabet))
    return alphabet[a]

class poplation:
    def __init__(self, g,s,m):
        self.best = ""
        self.worldrecord = 0
        self.goal = g
        self.mutation = m
        self.size =  s
        self.finished = True;
        self.pop = [None]*self.size;
        for i in range(self.size):
            self.pop[i] = adn(len(self.goal))
        self.calculFitness();
    def calculFitness(self):
        for i in range(self.size):
            self.pop[i].calcFitness(self.goal)
    def creerGroupe(self):
        self.groupe = [];
        maxFitness = 0;
        for i in range(self.size):
            if (self.pop[i].fitness > maxFitness):
                maxFitness = self.pop[i].fitness
        if(maxFitness != 0):
            for i in range(self.size):
                number = int(self.pop[i].fitness/maxFitness*100)
                for j in range(number):
                    self.groupe.append(self.pop[i])
    def generate(self):
        for i in range(self.size):
            if(len(self.groupe)!=0):
                a = int(random()*len(self.groupe))
                b = int(random()*len(self.groupe))
                parterA = self.groupe[a]
                parterB = self.groupe[b]
                child = parterA.crossover(parterB)
                child.mutate(self.mutation)
                self.pop[i] = child
            else:
                self.pop[i].mutation

    def evaluate(self):
        self.worldrecord = 0
        index = 0
        for i in range(self.size):
            if(self.pop[i].fitness > self.worldrecord):
                index = i
                self.worldrecord = self.pop[i].fitness
        self.best = self.pop[index].getPhrase()
        if(self.worldrecord == 1):
            self.finished = False


class adn:
    def __init__(self,l):
        self.size = l
        self.genes = [""]*self.size
        self.fitness = 0
        self.phrase = ""
        for i in range(self.size):
            # print(i);
            self.genes[i] = newChar()
            self.phrase += self.genes[i]
    def calcFitness(self,goal):
        ressemblance = 0
        for i in range(self.size):
            if(self.genes[i] == goal[i]):
                ressemblance += 1
                self.fitness = ressemblance / len(goal)
                # print(self.fitness)
    def getPhrase(self):
        phrase = ""
        for i in range(self.size):
            phrase += self.genes[i]
        return phrase

    def crossover(self,parter):
        child = adn(self.size)
        a = int(random()*self.size)
        for i in range(self.size):
            if(i<a):
                child.genes[i] = self.genes[i]
            else:
                child.genes[i] = parter.genes[i]
        return child

    def mutate(self,mutation):
        for i in range(self.size):
            if(random()<mutation):
                self.genes[i] = newChar()

target = input("entrez la target : ")
popmax = 100
mutationRate = 0.01
# print("done")
genera = [0] * 20
times = [0] * 20
numofgenerations = 0
pop = poplation(target, popmax, mutationRate)
pop.calculFitness()
while pop.finished:
    pop.creerGroupe()
    pop.generate()
    pop.calculFitness()
    pop.evaluate()
    numofgenerations += 1
    print(pop.best)
print("number of generations: ", numofgenerations)



# import time
# target = "a"
# popmax = 100
# mutationRate = 0.01
# # print("done")
# genera = [0]*20
# times = [0]*20
# for i in range(20):
#     a = [0]*10
#     b = [0]*10
#     totalgeneration = 0
#     totaltime = 0
#     for j in range(10):
#         numofgenerations = 0
#         start = time.time()
#         pop = poplation(target, popmax, mutationRate)
#         pop.calculFitness()
#         while pop.finished:
#             pop.creerGroupe()
#             pop.generate()
#             pop.calculFitness()
#             pop.evaluate()
#             numofgenerations += 1
#             print(pop.best)
#         totaltime += time.time()-start
#         totalgeneration += numofgenerations
#         print(totaltime)
#     totaltime /= 10
#     totalgeneration /= 10
#     # print("nombre moyen de generations = " + str(totalgeneration))
#     # print("temps moyen"+str(totaltime))
#     genera[i] = totalgeneration
#     times[i] = totaltime
#     # popmax += 100
#     target += newChar()
#     print(len(target))
#
#
# print("\ntemps:")
# for i in range(20):
#     print(times[i])
# print("\nnombre de generations")
# for i in range(20):
#     print(genera[i])
# print("\npopulation maximale")
# for i in range(20):
#     print(i)
